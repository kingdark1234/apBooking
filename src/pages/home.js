import React, { useState } from 'react'
import Functions from '../screens/functionss'
import mockData from '../mock/mock.json'
import {find,get,filter,map} from 'lodash'
import moment from 'moment'
import { Timeline } from 'antd';

function App() {
  const [availableResult, setAvailable] = useState('')
  const [checkResult, setCheck] = useState('')
  const [textType, setTextType] = useState('')
  const [textTypeCheck, setTextTypeCheck] = useState('')

  const findAvailability = (compareValue) => (item) => {
    const compareRoomId = get(compareValue,'roomId',null)
    const compareStartTime = get(compareValue,'time[0]',null)
    const compareEndTime = get(compareValue,'time[1]',null)
    const roomId = get(item,'roomId','')
    const startTime = moment(get(item,'startTime',null))
    const endTime = moment(get(item,'endTime',null))
    const compareDataNotBetweenPeriodBookingTime = (compareStartTime.isBetween(startTime,endTime) || compareEndTime.isBetween(startTime,endTime))
    const mockDataNotBetweenPeriodBookingTime = (startTime.isBetween(compareStartTime,compareEndTime) || endTime.isBetween(compareStartTime,compareEndTime))
    return (roomId === compareRoomId && (compareDataNotBetweenPeriodBookingTime || mockDataNotBetweenPeriodBookingTime))
  }

  const onCheckAvailabilityFinish = values => {
    const result = find(mockData,findAvailability(values))
    if(!result){
      setAvailable('That time is available for booking')
      setTextType('success')
    }else {
      setAvailable('That time is already booking!')
      setTextType('danger')
    }
  };

  const onCheckAvailabilityFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const filterInPeriod = period => item => {
    const startTime = moment(get(item,'startTime',null))
    return startTime >= period[0] && startTime <= period[1]
  }

  const generateTimeLine = item => (
    <Timeline.Item key={item.id}>{`(${item.startTime} To ${item.endTime}) ${item.title}`}</Timeline.Item>
  )

  const onGetBookingsForWeekFinish = value => {
    const week = get(value,'week','')
    let period = null
    switch (week) {
      case 'today':
        period = [moment('2019-09-28 00:00:00'),moment('2019-09-28 23:59:59')]
        break;
      case 'thisWeek':
        period = [moment('2019-09-22'),moment('2019-09-28 23:59:59')]
        break;
      case 'nextWeek':
        period = [moment('2019-09-29 00:00:00'),moment('2019-10-05 23:59:59')]
        break;
      default:
        period = [moment('2019-09-28'),moment('2019-09-28')]
        break;
    }
    const resultCheck = filter(mockData,filterInPeriod(period))
    const timeline = map(resultCheck,generateTimeLine)
    setCheck(
      <Timeline>
       {timeline}
      </Timeline>
    )
  }

  const onGetBookingsForWeekFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Functions 
      style={{padding:20}} 
      onCheckAvailabilityFinish={onCheckAvailabilityFinish}
      onCheckAvailabilityFinishFailed={onCheckAvailabilityFinishFailed}
      result={availableResult}
      textType={textType}
      onGetBookingsForWeekFinish={onGetBookingsForWeekFinish}
      onGetBookingsForWeekFinishFailed={onGetBookingsForWeekFinishFailed}
      resultCheck={checkResult}
      />
  );
}

export default App;

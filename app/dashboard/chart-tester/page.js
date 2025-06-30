import CircleChart from '@/components/circle-chart/circle-chart'
import HorizontalBarChart from '@/components/horizontalBarChart/horizontalBarChart'
import PieCharrt from '@/components/pieChart/pieChart'
import ThinBarChart from '@/components/thinBarChart/thinBarChart'
import LineChartUser from '@/components/user-line-chart/lineChart'
import React from 'react'
import { IconBase } from 'react-icons'

const ChartTester = () => {
  const data = [
    { Month: "05-2024", Attachments: 19, Requests: 22, WorkTimers: 40, FollowUps: 50, Meetings: 60, Reminders: 70 },
    { Month: "06-2024", Attachments: 19, Requests: 77, WorkTimers: 20, FollowUps: 40, Meetings: 10, Reminders: 10 },
    { Month: "07-2024", Attachments: 71, Requests: 108, WorkTimers: 10, FollowUps: 50, Meetings: 20, Reminders: 20 },
    { Month: "08-2024", Attachments: 26, Requests: 13, WorkTimers: 40, FollowUps: 30, Meetings: 10, Reminders: 30 },
    { Month: "09-2024", Attachments: 28, Requests: 80, WorkTimers: 40, FollowUps: 20, Meetings: 50, Reminders: 50 },
    { Month: "10-2024", Attachments: 109, Requests: 35, WorkTimers: 50, FollowUps: 20, Meetings: 40, Reminders: 80 },
    { Month: "11-2024", Attachments: 89, Requests: 59, WorkTimers: 20, FollowUps: 10, Meetings: 40, Reminders: 90 },
    { Month: "12-2024", Attachments: 57, Requests: 50, WorkTimers: 30, FollowUps: 70, Meetings: 20, Reminders: 10 }
  ];
    

  return (
    <div>
      <HorizontalBarChart p={"status bar" } data={data} icon={"fa-chart-bar"}></HorizontalBarChart>
      {/* <ThinBarChart data={data} ></ThinBarChart> */}
      {/* <PieCharrt data={data} icon="fa-chart-bar"p="File Status" ></PieCharrt> */}
      {/* <LineChartUser></LineChartUser> */}
      {/* <CircleChart></CircleChart> */}
    </div>
  )
}

export default ChartTester
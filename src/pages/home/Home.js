import React from 'react'
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../../src/dummydata'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';


export default function Home () {
    return (
        <div className="home">
            <FeaturedInfo></FeaturedInfo>
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid></Chart>
            <div className="homeWidgets">
                <WidgetSm></WidgetSm>
                <WidgetLg></WidgetLg>
            </div>
        </div >
    )
}


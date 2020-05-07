import React from 'react'
import ReactHighcharts from 'react-highcharts'
import highChartsConfig from './HighChartsConfig'
import { AppContext } from '../App/AppProvider'
import { Tile } from '../Shared/Tile'
import HighChartsTheme from './HighChartsTheme'

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

export default function () {
    return (
        <AppContext.Consumer>
            {({ historicalData }) => //The chart should be returned through a callback fn()
                <Tile>
                    {historicalData ?
                        <ReactHighcharts config={highChartsConfig(historicalData)} />
                        :
                        <div>Loading Historical Data</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}

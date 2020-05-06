import React from 'react'
import ReactHighcharts from 'react-highcharts'
import highchartsConfig from './HighChartsConfig'
import { AppContext } from '../App/AppProvider'
import { Tile } from '../Shared/Tile'
import HighChartsTheme from './HighChartsTheme'

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

export default function () {
    return (
        <AppContext.Consumer>
            {({ }) => //The chart should be returned through a callback fn()
                <Tile>
                    <ReactHighcharts config={highchartsConfig()} />
                </Tile>
            }
        </AppContext.Consumer>
    )
}

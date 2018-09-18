import React from 'react'
import {Sparklines, SparklinesLine} from 'react-sparklines'

const  Chart = ({data, color}) => {
    return(
        <td>
            <Sparklines height = {100} width = {160} data = {data}>
                <SparklinesLine color = {color}/>
            </Sparklines>
        </td>
    )
}
export default Chart;
import React from 'react'
import './WidgetLg.css';
export default function WidgetLg () {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest Transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">
                        Customer
                    </th>
                    <th className="widgetLgTh">
                        Data
                    </th>
                    <th className="widgetLgTh">
                        Amount
                    </th>
                    <th className="widgetLgTh">
                        Status
                    </th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/474x/98/c8/0d/98c80de7cee9782322fdca55409bf6bc--business-headshots-corporate-headshots.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 june 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/474x/98/c8/0d/98c80de7cee9782322fdca55409bf6bc--business-headshots-corporate-headshots.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 june 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/474x/98/c8/0d/98c80de7cee9782322fdca55409bf6bc--business-headshots-corporate-headshots.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 june 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/474x/98/c8/0d/98c80de7cee9782322fdca55409bf6bc--business-headshots-corporate-headshots.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 june 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"></Button>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://i.pinimg.com/474x/98/c8/0d/98c80de7cee9782322fdca55409bf6bc--business-headshots-corporate-headshots.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">
                            Susan Carol
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 june 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"></Button>
                    </td>
                </tr>

            </table>
        </div>
    )
}

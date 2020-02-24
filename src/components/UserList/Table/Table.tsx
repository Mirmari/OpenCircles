import React, { useState } from "react";

import TableRow from "./TableRow/TableRow";
import Popup from "../../Popup/Popup";
import { connect } from "react-redux";

import './Table.css';

type defaultProps = {
    clients: {
        id: number, mail:string, name:string,secondName:string, type: string, company: string, country: string, subscription: string
    }[];
}

const Table = ({clients}:defaultProps) => {
    const [currentIndex, setCurrentIndex ] = useState(-1);
    const onClick = (index:number) => {
        setCurrentIndex(index);
    };

    const closePopup = () => {
        setCurrentIndex(-1);
    };

    const ourClients = clients.map((client, index) => {
        return (
            <>
                <TableRow client={client} onClick={onClick}  index={index} key={index} />
                {index === currentIndex && (
                    <Popup onClose={closePopup} clients={client}/>
                )}
            </>
        )
    });

    return (
        <>
            <table className="clients">
                <tbody>
                    <tr className="clients__title">
                        <td>E-mail</td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Company</td>
                        <td> Country</td>
                        <td> Subscription</td>
                    </tr>
                        {ourClients}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = (state:defaultProps) => ({
    clients: state.clients
});

export default connect(mapStateToProps)(Table);
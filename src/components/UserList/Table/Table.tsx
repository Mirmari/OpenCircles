import React, { useState } from "react";

import './Table.css';
import TableRow from "./TableRow/TableRow";
import Popup from "../../Popup/Popup";

const Table = () => {
    const [currentIndex, setCurrentIndex ] = useState(-1);
    const onClick = (index:number) => {
        setCurrentIndex(index);
    };

    const closePopup = () => {
        setCurrentIndex(-1);
    };


    const data = [
            { id: 12412412, mail: 'leffler.karelle@marcellus.net', name: 'Lewis', secondName: 'Taylor', type: 'Business', company: 'green', country: 'Korea', subscription: '11/02/2016' },
            { id: 2352212, mail: 'karolann_walker@yahoo.com', name: 'Katherine', secondName: 'Rogers', type: 'Business', company: 'olive', country: 'Rwanda', subscription: '11/02/2016' },
            { id: 434634123, mail: 'lucile.mcdermott@yahoo.com', name: 'Francisco', secondName: 'Webster',  type: 'Private', company: 'aqua', country: 'Guam', subscription: '11/02/2016' },
            { id: 2342653, mail: 'elfrieda_sanford@hagenes.co.uk', name: 'Louisa', secondName: 'Griffith',  type: 'Business', company: 'olive', country: 'Uruguay', subscription: '11/02/2016' },
            { id: 235234, mail: 'daphney.okuneva@gmail.com', name: 'Alan', secondName: 'Ellis',  type: 'Private', company: 'green', country: 'Djibouti', subscription: '11/02/2016' },
            { id: 23423654, mail: 'ezequiel_rutherford@yahoo.com', name: 'Edward', secondName: 'Jacobs',  type: 'Business', company: 'black', country: 'Jersey', subscription: '11/02/2016' },
            { id: 536231, mail: 'leffler.karelle@marcellus.net', name: 'Lewis', secondName: 'Taylor',  type: 'Business', company: 'green', country: 'Korea', subscription: '11/02/2016' },
            { id: 7423423, mail: 'karolann_walker@yahoo.com', name: 'Katherine', secondName: 'Rogers',  type: 'Business', company: 'olive', country: 'Rwanda', subscription: '11/02/2016' },
            { id: 8234124, mail: 'lucile.mcdermott@yahoo.com', name: 'Francisco', secondName: 'Webster',  type: 'Private', company: 'aqua', country: 'Guam', subscription: '11/02/2016' },
        ];

    const ourClients = data.map((client, index) => {
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

export default Table;
import React  from "react";

type defaultProps = {
    client:
        {
            id: number, mail:string, name:string,secondName:string, type: string, company: string, country: string, subscription: string
        }
}


const TableRow = ({client}:defaultProps) => {
    return (
        <tr>
            <td className="primary-text">{client.mail}</td>
            <td className="primary-text">
                {client.name}
                <span className="secondary-text"> {client.secondName}</span>
            </td>
            <td className="secondary-text">{client.type}</td>
            <td className="secondary-text">{client.company}</td>
            <td className="secondary-text">{client.country}</td>
            <td className="primary-text">{client.subscription}</td>
        </tr>
    );
};

export default TableRow;
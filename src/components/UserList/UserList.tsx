import React from "react";

import "./UserList.css";
import Table from "./Table/Table";

const UserList = () => {
    return (
        <div className="user-list">
            <Table />
            <button className="user-list__button">
                <span className="button__text">Show more</span>
            </button>
        </div>
    );
};

export default UserList;
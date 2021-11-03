import * as React from "react";
import {  Datagrid, TextField, ArrayField } from 'react-admin';
import { useRecordContext } from 'react-admin';
import { CalculateExpiry } from "./CalculateExpiry";

const MyTextField = (props) => {
    const { source } = props;
    const record = useRecordContext(props);
    if (record.name === 'expiry') {
        return <div>{CalculateExpiry(record[source]) }</div>;
    }
    return <div>{record[source]}</div>;
}

const userData = {
    
    details: [
        {
            name: "account_name",
            value: "demo"
        },
        {
            name: "email",
            value: "admin@ozone.one"
        },
        {
            name: "expiry",
            value: 1636588800000
        }
    ]
}
export const UserList = props => {
    console.log(props)
    return (
        <ArrayField record={userData} source="details">
            <Datagrid>
                <TextField source="name" />
                <MyTextField source="value" />
            </Datagrid>
        </ArrayField>
    )
}


import { useEffect, useState } from "react";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import Typography from "@mui/material/Typography";

const WelcomeName = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const [name, setName] = useState(null);

    const activeAccount = instance.getActiveAccount();
    useEffect(() => {
        if (activeAccount && activeAccount.name && isAuthenticated) {
            setName(activeAccount.name.split(' ')[0]);
        } else {
            setName(null);
        }
    }, [activeAccount, isAuthenticated]);

    if (name) {
        return <Typography variant="h6">Welcome, {name}</Typography>;
    } else {
        return null;
    }
};

export default WelcomeName;
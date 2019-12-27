import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import logo from "./../images/piaiclogo.png"
const useStyles = makeStyles({
    card: {
        width: "40%",
    },
    bullet: {
        display: 'inline-block',
        margin: '0px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "#0acd95",
        color: "white",
        width: "100%",
        margin: "0px",
        padding: "10px"
    },
    logo: {
        height: 120,
    },
    coursename: {
        color: "#017969",
        marginTop: "-16px",

    },
    textfields: {
        width: "100%",
        height: "52px",
        borderRadius: "5px",
        border: "none",
        border: "1px solid gray",
        padding: "10px"
    },
    textfieldstitle: {
        color: "#28a745!important",
        float: "left",
        textAlign: "left",

    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <center>
            <Card className={classes.card}>
                <Paper>
                    <CardContent style={{ padding: "0px" }}>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Student Login
        </Typography>
                        <div style={{ padding: "20px" }}>
                            <img src={logo} alt="Logo" className={classes.logo} variant="outlined" />
                            <p className={classes.coursename} color="textSecondary" gutterBottom>Presidential Initiative for <br />
                                Artificial Intelligence and Computing</p>
                            <span className={classes.textfieldstitle} color="textSecondary" gutterBottom>CNIC:</span>
                            <input type="text" name="name" placeholder="Enter Email Address" className={classes.textfields} color="textSecondary" gutterBottom /><br /><br />
                            <span className={classes.textfieldstitle} color="textSecondary" gutterBottom>Email:</span>
                            <input type="text" name="name" placeholder="Enter Email Address" className={classes.textfields} color="textSecondary" gutterBottom /><br /><br />
                            <span className={classes.textfieldstitle} color="textSecondary" gutterBottom>Password:</span>
                            <input type="password" name="name" placeholder="Enter Password" className={classes.textfields} color="textSecondary" gutterBottom />
                            <p style={{ textAlign: "left", color: "grey", fontSize: 14, margin: "0px" }}>Already a member? <Link to="/Login" style={{ color: "green" }}> Login</Link></p>
                            <br />
                            <Button variant="outlined" color="textSecondary" style={{ width: "40%", borderRadius: "20px", padding: "5px", borderColor: "green" }}>
                                SignUp
      </Button>
                        </div>
                    </CardContent>
                </Paper>
            </Card>
        </center>

    );
}
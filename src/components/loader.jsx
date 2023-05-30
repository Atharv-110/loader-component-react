import React, {useState, useEffect} from "react";
import "../App.css";
import PropagateLoader from "react-spinners/PropagateLoader";


export default function About() {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    // }, [])
    return (
    <>
        <PropagateLoader
          color="#0064ff"
          loading={true}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </>
  );
}
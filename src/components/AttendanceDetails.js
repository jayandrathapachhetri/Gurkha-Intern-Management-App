import React, { useState, useEffect } from "react";

function AttendanceDetails({ id, name, present_day, absent_day }) {
  const [pcount, setPCount] = useState(0);
  const [acount, setACount] = useState(0);
  const [isPresentButtonDisabled, setPresentButtonDisabled] = useState(false);
  const [isAbsentButtonDisabled, setAbsentButtonDisabled] = useState(false);
  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);

  

  useEffect(() => {
    fetch(`http://localhost:3000/intern/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPCount(isNaN(data.present_day) ? 0 : data.present_day);
        setACount(isNaN(data.absent_day) ? 0 : data.absent_day);
        
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handlePresentClick = () => {
    setPCount(pcount + 1);
    setPresentButtonDisabled(true);
    setAbsentButtonDisabled(true);
    setSaveButtonDisabled(false);
  };

  const handleAbsentClick = () => {
    setACount(acount + 1);
    setPresentButtonDisabled(true);
    setAbsentButtonDisabled(true);
    setSaveButtonDisabled(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/intern/${id}`, {
      method: "PATCH", // Use PATCH instead of PUT to update only specific fields
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ present_day: pcount, absent_day : acount }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the count with the newly saved value
        setPCount(data.present_day);
        setACount(data.absent_day);
        setPresentButtonDisabled(false);
        setAbsentButtonDisabled(false);
        setSaveButtonDisabled(true);
        alert("Attendance Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{pcount}</td>
      <td>{acount}</td>
      <td className="d-flex-md justify-content-around">
        <button
          type="button"
          className="btn btn-sm btn-primary mx-1"
          onClick={handlePresentClick}
          disabled={isPresentButtonDisabled}
        >
          Present
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary mx-1"
          onClick={handleAbsentClick}
          disabled={isAbsentButtonDisabled}
        >
          Absent
        </button>
        <button
          type="button"
          className="btn btn-sm btn-primary mx-1"
          onClick={handleSave}
          disabled={isSaveButtonDisabled}
        >
          Save
        </button>
      </td>
    </>
  );
}

export default AttendanceDetails;


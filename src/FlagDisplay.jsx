// Script used to get the URL:
// const elements = document.querySelectorAll('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"] i.char');
// let url = '';
// elements.forEach(el => url += el.getAttribute('value'));
// console.log(url);

import React, { useState, useEffect } from "react";

const FlagDisplay = () => {
  const [flag, setFlag] = useState("");
  const [displayedFlag, setDisplayedFlag] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the flag from the URL
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726570"
    )
      .then((response) => response.text())
      .then((data) => {
        setFlag(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!flag) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < flag.length) {
        setDisplayedFlag((prev) => prev + flag[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [flag]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {displayedFlag.split("").map((char, index) => (
            <li key={index}>{char}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlagDisplay;

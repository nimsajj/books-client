const DateToPublished = ({ dateTime }) => {
  const indexOfSpace = dateTime.indexOf(" ");
  const date = dateTime.slice(0, indexOfSpace);
  const time = dateTime.slice(indexOfSpace);

  return (
    <>
      <b>Publié le </b>
      {date}
      <b> à</b>
      {time}
    </>
  );
};

export default DateToPublished;

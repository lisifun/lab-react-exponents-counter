const Exponent = ({ count, exponent }) => {
  //   const test1 = String(count);
  //   console.log(test1, typeof test1);
  //   let test2 = test1 + "*";
  //   console.log(test2.repeat(3));

  let multiplication = String(count + " * ").repeat(exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplication.slice(0, multiplication.length - 2)} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;

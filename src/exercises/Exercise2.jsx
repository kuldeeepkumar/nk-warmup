const Exercise2 = () => {
  // Issues from nitin's side 04-02-2025

  let valueName = "";

  let box = ["kuldeep", "nitin", "bunty", "Anu CR"];

  function sum(name, ...args) {
    let sum = 0;
    for (let i in args) {
      sum += args[i];
      console.log("i", i);
    }
    console.log(sum);
    console.log(name);
  }
  // let box = "box";
  // sum(box, 20, 20);

  return (
    <div>
      <button
        onClick={() => {
          sum(valueName, 20, 20);
          valueName = box.find((item) => item);
        }}>
        click me
      </button>
    </div>
  );
};

export default Exercise2;

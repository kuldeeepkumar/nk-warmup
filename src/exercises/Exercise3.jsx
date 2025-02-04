const Exercise3 = () => {
  var arr1 = [10, 20, 30, 40];
  var arr2 = [...arr1];

  arr1.push(50);
  console.log("arr1 :", arr1);
  console.log("arr2 :", arr2);

  return <div>Exercise3</div>;
};

export default Exercise3;

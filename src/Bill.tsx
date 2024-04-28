function Input(props: { children: any }) {
  return (
    <>
      <div className="bill-field">
        <label>{props.children}</label>
        <input type="text" />
      </div>
    </>
  );
}

function SelectInput(props: { children: any }) {
  return (
    <>
      <div className="bill-field">
        <label htmlFor="">{props.children}</label>
        <select>
          <option value="You">You</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
    </>
  );
}
function BillForm() {
  return (
    <>
      <div className="split-bill">
        <h1>Split your Bill</h1>
        <Input>Bill value</Input>
        <Input>Your expense</Input>
        <Input>Friend expenses</Input>
        <SelectInput>Who is paying the bill?</SelectInput>
        <button className="btn-action">Split Bill</button>
      </div>
    </>
  );
}

export default BillForm;

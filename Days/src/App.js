import Table1 from "./components/day5/table";

function App() {
  const Table={
    table1:['Emp ID','E001','E002','E003','E004','E005']
  }
  return (
    <>
    <Table1 data={Table}></Table1>
    </>
  );
}

export default App;

import Header from "./assets/header"


function App() {

  var student = {
    name: "John",
    age: 20
  }

  var contact = [
    {
      name: "johan",
      phone: "0987654321",
      icon: "✅"
    },
    {
      name: "abhishek",
      phone: "0987654321",
      icon: "✅"
    },
    {
      name: "johan",
      phone: "0987654321",
      icon: "✅"
    }
  ]



  var city = ["surat", "rajkot", "baroda", "ahmedabad"];
  var city1 = [...city, "ahmedabad2"];
  return (
    <>
      <Header />

      <p>{student.name}</p>
      <p>{student.age}</p>

      <p>{city[3]}</p>

      {city1.map((v, i) => {
        return (
          <p>{v}</p>
        )
      })}

      <br />
      <table align="center" border={1}>
        <tr>
          <th>name</th>
          <th>phone</th>
          <th>icon</th>
        </tr>
      </table>
      {contact.map((v, i) => {
        return (
          <>
            {
              contact.map((v, i) => {
                return (
                  <table align="center" border={1}>
                    <tr>
                      <td>{v.name}</td>
                      <td>{v.phone}</td>
                      <td>{v.icon}</td>
                    </tr>
                  </table>
                )
              })
            }
          </>
        )
      })}
    </>
  )
}

export default App

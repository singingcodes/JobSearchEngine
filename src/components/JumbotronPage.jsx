import { Jumbotron, Container } from "react-bootstrap"
const JumbotronPage = () => {
  return (
    <Jumbotron>
      <Container>
        <h1 style={{ color: "#F3174A" }}>
          Developer job offers according <br />
          to your requirements
        </h1>
        <p>
          Create a free profile and companies that match your requirements will
          apply to you. Salaries between €40,750 and €135,60. <br /> Search for
          jobs that match your profile and apply to them.
        </p>
      </Container>
    </Jumbotron>
  )
}
export default JumbotronPage

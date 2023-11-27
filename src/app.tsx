import Title from "@components/title/title";
import Text from "@components/text/text";

function App() {
  return (
    <>
      <Title type="h1">title 1</Title>
      <Title type="h2">title 2</Title>
      <Title type="h3">title 3</Title>
      <Title type="h4">title 4</Title>
      <Title type="h5">title 5</Title>
      <Title type="h6">title 6</Title>
      <Text type="lead">text lead</Text>
      <Text type="large">text large</Text>
      <Text type="base">text base</Text>
      <Text type="small">text small</Text>
      <Text type="extrasmall">text extrasmall</Text>
      <Text type="extraextrasmall">text extraextrasmall</Text>
      <Text type="display" variant="h1">
        text lead
      </Text>
      <Text type="display" variant="h2">
        text lead
      </Text>
      <Text type="display" variant="h3">
        text lead
      </Text>
      <Text type="display" variant="h4">
        text lead
      </Text>
    </>
  );
}

export default App;

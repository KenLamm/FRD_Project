import { Tabs } from '@mantine/core';

 function Todo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List position="center">
        <Tabs.Tab value="first">進行中</Tabs.Tab>
        <Tabs.Tab value="second">完成</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
export default Todo
import {
  Button,
  AddIcon,
  SideSheet,
  Pane,
  Heading,
  Card,
  Position,
  TextInputField,
} from "evergreen-ui";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todos";
import { nanoid } from "nanoid";

const AddTodo = () => {
  const [isShown, setIsShown] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: nanoid(),
        text: value,
        completed: false,
      })
    );

    setValue("");
    setIsShown(false);
  };

  return (
    <>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
        }}
        position={Position.RIGHT}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Add Todo</Heading>
          </Pane>
        </Pane>

        <Card>
          <Pane padding={16}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextInputField
                label="Todo Text"
                description="What do you want to do? eg. 'Complete math homework' or 'Take the dog for a walk'"
                placeholder="Enter Todo Text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button type="submit">Add</Button>
            </form>
          </Pane>
        </Card>
      </SideSheet>
      <Button
        appearance="primary"
        intent="success"
        size="large"
        onClick={() => setIsShown(true)}
      >
        <AddIcon /> &nbsp; Add Todo
      </Button>
    </>
  );
};

export default AddTodo;

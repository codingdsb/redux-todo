import {
  Button,
  SideSheet,
  Pane,
  Heading,
  Card,
  Position,
  TextInputField,
  EditIcon,
} from "evergreen-ui";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/Todos";

const EditTodo = ({ todo }) => {
  const [isShown, setIsShown] = useState(false);
  const [value, setValue] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateTodo({
        id: todo.id,
        text: value,
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
            <Heading size={600}>Edit Todo</Heading>
          </Pane>
        </Pane>

        <Card>
          <Pane padding={16}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextInputField
                label="Todo Text"
                description="Edit the text of your todo"
                placeholder="Enter Todo Text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button type="submit">Save</Button>
            </form>
          </Pane>
        </Card>
      </SideSheet>
      <EditIcon
        color="blue500"
        size={25}
        style={{ cursor: "pointer" }}
        onClick={() => setIsShown(true)}
      />
    </>
  );
};

export default EditTodo;

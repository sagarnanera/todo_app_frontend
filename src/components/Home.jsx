import React from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { dragItem } from "./constants";
import StatusSection from "./StatusSection";

const Home = () => {
  //   const [{ isOver: isOverProcessingSection }, processingSectionRef] = useDrop(
  //     () => ({
  //       accept: dragItem.TODO_CARD,
  //       drop: () => moveTodoCard(x, y),
  //       collect: (monitor) => ({
  //         isOver: !!monitor.isOver(),
  //       }),
  //     }),
  //     [x, y]
  //   );
  //   const [{ isOver: isOverCompletedSection }, completedSectionRef] = useDrop(
  //     () => ({
  //       accept: dragItem.TODO_CARD,
  //       drop: () => moveTodoCard(x, y),
  //       collect: (monitor) => ({
  //         isOver: !!monitor.isOver(),
  //       }),
  //     }),
  //     [x, y]
  //   );

  const todos = [
    {
      _id: "65b0deb093a0a2443de385c0",
      userId: "65ae8fc886765332a90cd08e",
      title: "Test Todo 1",
      description: "This is test todo",
      status: "pending",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["work", "office"],
      priority: "high",
    },
    {
      _id: "65b0dec693a0a2443de385c1",
      userId: "65ae8fc886765332a90cd08e",
      title: "Test Todo 2",
      description: "Another test todo",
      status: "processing",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["personal"],
      priority: "medium",
    },
    {
      _id: "65b0ded293a0a2443de385c2",
      userId: "65ae8fc886765332a90cd08e",
      title: "Test Todo 3",
      description: "Yet another test todo",
      status: "completed",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["work", "home"],
      priority: "low",
    },
    {
      _id: "65b0dfc493a0a2443de385c3",
      userId: "65ae8fc886765332a90cd08e",
      title: "Shopping",
      description: "Buy groceries for the week",
      status: "pending",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["groceries", "shopping"],
      priority: "medium",
    },
    {
      _id: "65b0dfeb93a0a2443de385c4",
      userId: "65ae8fc886765332a90cd08e",
      title: "Read Book",
      description: "Finish reading 'The Great Gatsby'",
      status: "processing",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["reading"],
      priority: "high",
    },
    {
      _id: "65b0e01393a0a2443de385c5",
      userId: "65ae8fc886765332a90cd08e",
      title: "Exercise",
      description: "Go for a jog in the park",
      status: "completed",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["fitness", "exercise"],
      priority: "low",
    },
    {
      _id: "65b0e02893a0a2443de385c6",
      userId: "65ae8fc886765332a90cd08e",
      title: "Project Presentation",
      description: "Prepare slides for the project presentation",
      status: "pending",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["work", "project"],
      priority: "high",
    },
    {
      _id: "65b0e03d93a0a2443de385c7",
      userId: "65ae8fc886765332a90cd08e",
      title: "Movie Night",
      description: "Watch the latest blockbuster",
      status: "completed",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["entertainment", "movie"],
      priority: "medium",
    },
    {
      _id: "65b0e05293a0a2443de385c8",
      userId: "65ae8fc886765332a90cd08e",
      title: "Cooking Class",
      description: "Join a virtual cooking class",
      status: "processing",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["cooking", "hobby"],
      priority: "medium",
    },
    {
      _id: "65b0e06793a0a2443de385c9",
      userId: "65ae8fc886765332a90cd08e",
      title: "Learn React Hooks",
      description: "Explore and practice React Hooks",
      status: "pending",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["programming", "react"],
      priority: "high",
    },
    {
      _id: "65b0e07b93a0a2443de385ca",
      userId: "65ae8fc886765332a90cd08e",
      title: "Yoga Session",
      description: "Attend an online yoga session",
      status: "completed",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["fitness", "yoga"],
      priority: "low",
    },
    {
      _id: "65b0e08f93a0a2443de385cb",
      userId: "65ae8fc886765332a90cd08e",
      title: "Webinar Registration",
      description: "Register for the upcoming webinar on tech trends",
      status: "pending",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["learning", "webinar"],
      priority: "medium",
    },
    {
      _id: "65b0e0a393a0a2443de385cc",
      userId: "65ae8fc886765332a90cd08e",
      title: "Gardening",
      description: "Plant flowers in the backyard",
      status: "processing",
      dueOn: 1706027052000,
      createdOn: 1705940674811,
      tags: ["hobby", "gardening"],
      priority: "low",
    },
  ];

  const statuses = ["pending", "processing", "completed"];

  return (
    <div>
      <h2>Home Page</h2>
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* {renderSection("pending")} */}
          {/* {renderSection("processing")} */}
          {/* {renderSection("completed")}*/}

          {statuses.map((status) => {
            const filterdTodos = todos.filter((todo) => todo.status === status);

            return (
              <StatusSection
                key={status}
                status={status}
                todos={filterdTodos}
              />
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
};

export default Home;

import styled from "styled-components";

export const Time = styled.li`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  #time {
    color: ${(props) => (props.available ? "#999" : "#7159c1")};

    font-size: 20px;
    font-weight: normal;
    margin-right: 15px;
  }

  span {
    color: ${(props) => (props.available ? "#999" : "#666")};
    font-size: 16px;
    font-weight: normal;
  }

  .custom-switch,
  .custom-control {
    float: right;
  }

  .custom-switch .custom-control-label::before {
    height: 20px;
    width: 50px;
    left: calc(-3.25rem + 2px);
  }

  .custom-switch::before {
    left: calc(1.25rem + 6px);
  }
  .custom-switch .custom-control-label::after {
    height: 16px;
    width: 16px;
    left: calc(-3.3rem + 6px);
  }

  .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
    background-color: #fff;
    transform: translateX(1.8rem);
  }
`;

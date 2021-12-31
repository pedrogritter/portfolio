import styled from "styled-components";

const BarWrapper = styled.div`
  progress[value] {
    width: 60vw;
    height: auto;
    appearance: none;

    ::-webkit-progress-bar {
      height: 50px;
      border-radius: 8px;
      background-color: #eee;
    }

    ::-webkit-progress-value {
      height: 50px;
      border-radius: 8px;
      background-color: rgb(35, 229, 219);
    }
  }
`;


interface ProgressBarProps {
    value: number;
    max: number;
}

const ProgressBar = (props: ProgressBarProps) => {
    const  {max, value} = props;

    return (
        <BarWrapper>
            <progress value={value} max={max} />
        </BarWrapper>
    )

} 

export default ProgressBar;
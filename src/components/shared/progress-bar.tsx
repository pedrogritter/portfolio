import styled from "styled-components";

/* TODO: - Add animation feature to progressbar */

const BarWrapper = styled.div`
  progress[value] {
    width: 60vw;
    height: auto;
    appearance: none;

    ::-webkit-progress-bar {
      height: 40px;
      border-radius: 8px;
      background-color: #eee;
    }

    ::-webkit-progress-value {
      height: 40px;
      border-radius: 8px;
      background-color: #0fb;;
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
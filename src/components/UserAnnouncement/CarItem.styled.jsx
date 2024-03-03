import styled from 'styled-components';

export const CarItemStyled = styled.li`
    display: flex;
    gap: 20px;
    padding: 16px 16px 20px 16px;
    width: 844px;
    /* max-height: 240px; */
    border-radius: 8px;
    background: #f1f5ff;
    position: relative;

    .img {
    width: 284px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
    }

    .infoDiv {
        margin-top: 20px;
    }
    .modelInfoDIV {
        display: flex;
        width: 500px;
        justify-content: space-between;
    }
    .modelInfo {
        color: #141414;

        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .numberDiv {
        display: flex;
        width: auto;
        flex-direction: column;
        gap: 12px;
        margin-top: 12px;
    }
    .number {
        align-self: flex-start;
        color: #141414;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        padding: 2px 4px;
        border: 1px solid #ababab;
        border-radius: 4px;
    }

    .listDIV {
        display: flex;
        gap: 60px;
        margin-top: 20px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 11px;
    }

    .itemLI {
        display: flex;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        font-family: 'Roboto', sans-serif;
        color: #4b4b4b;
        font-size: 14px;
    }
    .favoriteBTN {
        background-color: transparent;
        border: 0;
        position: absolute;
        right: 20px;
    }

    .center{
        display: flex;
        align-items: center;
    }

    @media (max-width: 769px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 330px;
        /* max-height: 454px; */
        padding: 16px 16px 20px 16px;
        border-radius: 8px;
        background: #f1f5ff;
        position: relative;
    
        .img {
        width: 298px;
        height: 213px;
        border-radius: 8px;
        object-fit: cover;
        }

        .infoDiv {
        margin-top: 16px;
        }
        .modelInfoDIV {
        display: flex;
        width: 298px;
        justify-content: space-between;
        }
        .modelInfo {
        color: rgb(20, 20, 20);
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0%;
        text-align: left;
        }
        .numberDiv {
        display: flex;
        width: auto;
        flex-direction: column;
        gap: 10px;
        margin-top: 16px;
        }
        .number {
        align-self: flex-start;
        color: rgb(20, 20, 20);
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0%;
        text-align: left;

        padding: 2px 4px 2px 4px;
        border: 1px solid #ababab;
        border-radius: 4px;
        }

        .listDIV {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 18px;
        }
        .list {
        display: flex;
        flex-direction: row;
        gap: 11px;
        justify-content: space-around;
        }
        .itemLI {
        display: flex;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        color: rgb(75, 75, 75);
        font-family: 'Roboto' sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0%;
        overflow-x: hidden;
        }
        .favoriteBTN {
        background-color: transparent;
        border: 0;
        position: absolute;
        right: 30px;
        top: 30px;
        }
    }
    @media (min-width: 770px) {
        .favoriteBTN {
        background-color: transparent;
        border: 0;
        position: absolute;
        right: 20px;
        bottom: 14px;
        }
    }
`;
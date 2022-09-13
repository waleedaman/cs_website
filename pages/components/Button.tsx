import React, {useState} from "react";

function Button(props) {
    return (
        <div className={'p-2'}>
            <div className={'box'}>
                <div className={'content'} {...props}>

                </div>
            </div>
            <style jsx>
                {`
                  .box {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #060c21;
                    z-index: 1;
                  }

                  .box:before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    bottom: -2px;
                    right: -2px;
                    background: #fff;
                    z-index: -2;
                  }

                  .box:after {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    bottom: -2px;
                    right: -2px;
                    background: #fff;
                    z-index: -3;
                    filter: blur(40px);
                  }

                  .box:hover:before, .box:hover:after {
                    background: linear-gradient(235deg, #FFB200, #FFB255);
                  }

                  .box {
                    transition: all .2s ease-in-out;
                  }

                  .box:hover {
                    transform: scale(1.1);
                  }

                  .box:before, .box:after {
                    background: linear-gradient(235deg, #FFB200, #060c21, #FFB255);
                  }

                  .content {
                    padding: 6px;
                    box-sizing: border-box;
                    color: #fff;
                    background: #060c21;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                  }
                `}
            </style>
        </div>
    )
}

export default Button;
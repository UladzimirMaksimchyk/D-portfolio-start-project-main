import React from "react";




export const Menu: React.FC = () => {
    return (
        <ul>
        {props.menuItems.map((item, index) => {
          return <ListItem key={index}>
            <Link href="">
              {item}
              {/* <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask> */}

            </Link>
          </ListItem>
        })}
      </ul>

    );
};

const ListItem = styled.li`
  &:hover{
  transform: scale(1.2);
}
`
const Link = styled.a`
font-family: Poppins,sans-serif;
font-size: 20px;
font-weight: 600;
text-align: center;
color:#ff00f7;
`

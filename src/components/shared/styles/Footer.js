import styled from '@emotion/styled'

export const FooterContainer = styled.footer`
background: black;
color: white;
padding-block: 50px;
.mainFooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        img{
            width: 200px;
            margin: 0px;
        }
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.5rem;
        a{
            color: white;
            text-decoration: none;
            margin-block: 10px;
            &:hover{
                border-bottom: 2px solid #E88069;
            }
        }
        .activePage{
            border-bottom: 2px solid #E88069;
        }
    }
}
.AddressContainer{
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    div{
        margin-block: 50px;
        margin-right: 0px;
        p{
            margin: 0px;
            margin: 0px;
            font-size: 1.1rem;
            letter-spacing: 1px;
            color: #bfbebe;
            text-align: center;
        }
    }
}
.SocialContainer{
    width: 80%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    a{
        img{
            width: 25px;
            height: 27px;
            margin: 0px;
            &:hover{
                filter: invert(.2);
            }
        }
    }
}
@media (min-width: 700px) {
    .mainFooter{
        flex-direction: row;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        justify-content: space-between;
        div{
            flex-direction: row;
            justify-content: space-between;
            width: 55%;
            max-width: 360px;
            a{
                font-size: 1rem;
            }
        }
    }
    .AddressContainer{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        div{
            margin-right: 25px;
        }
    }
}
`
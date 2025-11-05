import styled from 'styled-components'

const Container = styled.main`
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
`

const Card = styled.section`
    width: 360px;
    border: 1px solid red;
    border-radius: 14px;
    padding: 16px;
`

const Title = styled.section`
    margin: 0 0 8px;
    font-siza: 20px;
`

const Button = styled.section`
    cursor: pointer;
    border: 1px solid #630000ff;
    border-radius: 10px;
    padding: 10px 14px;

    background: ${({ $variant }) => ($variant === 'ghost' ? 'transparent' : '#630000ff')};

    &:hover {
        filter: brightness(0.9);
    }
`

export default function CardStyled() {
    return (
        <Container>
            <Card>
                <Title>Styled-Components</Title>
                <p>Um botão com uma variante</p>

                <div style={{ display: "flex", gap: 8 }}>
                    <Button>Solid</Button>
                    <Button $variant='ghost'>Ghost</Button>
                </div>
            </Card>
        </Container>
    )
}
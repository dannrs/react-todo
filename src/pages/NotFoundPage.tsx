import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import { Home } from "lucide-react";
import Button from "../components/Button";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <NotFoundContainer>
        <Title>404</Title>
        <Message>Oops! Page not found</Message>
        <StyledLink to="/">
          <Button>
            <Home
              style={{ height: "1rem", width: "1rem", marginRight: "0.5rem" }}
            />
            Back to Home
          </Button>
        </StyledLink>
      </NotFoundContainer>
    </Container>
  );
}

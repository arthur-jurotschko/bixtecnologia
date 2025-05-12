"use client";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
`;

export const CardHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const CardContent = styled.div`
  font-size: 14px;
`;

export default function Card({ children }: { children: React.ReactNode }) {
  return <CardWrapper>{children}</CardWrapper>;
}



import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/card";
import { Button } from "../atoms/button";

interface IActionCard {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const ActionCard: React.FC<IActionCard> = ({
  title,
  description,
  children
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
    <CardFooter className="flex flex-col gap-8">
      <hr className="border-stone-400 w-full" />
      <Button className="uppercase w-full">Começar</Button>
    </CardFooter>
  </Card>
)
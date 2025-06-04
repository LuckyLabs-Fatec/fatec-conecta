import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/card";
import { Button } from "../atoms/button";

interface IActionCard {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: () => void;
}

export const ActionCard: React.FC<IActionCard> = ({
  title,
  description,
  children,
  action
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="text-[#008CB0]">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
    <CardFooter className="flex flex-col gap-8">
      <hr className="border-stone-400 w-full" />
      <Button onClick={action} className="uppercase w-full">Começar</Button>
    </CardFooter>
  </Card>
)
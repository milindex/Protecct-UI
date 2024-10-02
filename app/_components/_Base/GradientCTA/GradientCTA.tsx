import colors from "@/lib/variables";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const GradientCTA = () => {
  return (
    <Button
      component="a"
      href="/contact-us"
      rightSection={<IconArrowRight size={14} />}
      color="tomato.6"
    >
      Let's Discuss
    </Button>
  );
};

export default GradientCTA;

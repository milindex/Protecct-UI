"use client";
import Logo from "@/app/_components/_Base/Logo/Logo";
import classes from "./Navbar.module.scss";
import GradientCTA from "@/app/_components/_Base/GradientCTA/GradientCTA";

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { IconNotification, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const services = [
  {
    icon: IconCode,
    title: "SMPV (U) Rules, 2016",
    description: "Description about - SMPV (U) Rules, 2016",
    link: "/services",
  },
  {
    icon: IconCoin,
    title: "Petroleum Rules, 2002",
    description: "Description about - Petroleum Rules, 2002",
    link: "/services",
  },
  {
    icon: IconBook,
    title: "Third Party Inspection",
    description: "Description about - Third Party Inspection",
    link: "/services",
  },
  {
    icon: IconFingerprint,
    title: "Pressure Vessel Inspection",
    description: "Description about - Pressure Vessel Inspection",
    link: "/services",
  },
  {
    icon: IconChartPie3,
    title: "Lifting Tools & Tackles Testing",
    description: "Description about - Lifting Tools & Tackles Testing",
    link: "/services",
  },
  {
    icon: IconNotification,
    title: "Gas Cylinder Testing",
    description: "Description about - Gas Cylinder Testing",
    link: "/services",
  },
  {
    icon: IconChartPie3,
    title: "Safety Relief Valve Testing",
    description: "Description about - Safety Relief Valve Testing",
    link: "/services",
  },
  {
    icon: IconNotification,
    title: "NDT Services",
    description: "Description about - NDT Services",
    link: "/services",
  },
  {
    icon: IconNotification,
    title: "Construction Safety",
    description: "Description about - Construction Safety",
    link: "/services",
  },
];

const awarrds = [
  {
    icon: IconCode,
    title: "Petroleum & Explosives Safety Organisation",
    description: "Description about - PESO",
    link: "/services",
  },
  {
    icon: IconCoin,
    title: "Factories Act & Factory Rules",
    description: "Description about - Factories Act & Factory Rules",
    link: "/services",
  },
  {
    icon: IconBook,
    title: "Building & Other Construction Workers Act",
    description: "Description about - Building & Other Construction Workers Act",
    link: "/services",
  },
  {
    icon: IconFingerprint,
    title: "ISO 9001:2015",
    description: "Description about - ISO 9001:2015",
    link: "/services",
  },
];

const training = [
  {
    icon: IconCode,
    title: "Safety Studies",
    description: "Description about - Safety Studies",
    link: "/services",
  },
  {
    icon: IconCoin,
    title: "Safety Audits",
    description: "Description about - Safety Audits",
    link: "/services",
  },
  {
    icon: IconBook,
    title: "Safety Training",
    description: "Description about - Safety Training",
    link: "/services",
  },
];

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [servicesLinkOpened, { toggle: toggleServicesLinks }] = useDisclosure(false);
  const [awarrdsLinkOpened, { toggle: toggleAwardsLinks }] = useDisclosure(false);
  const [trainingLinkOpened, { toggle: toggleTrainingLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const getLinks = (data: any[]) => {
    return data.map((item) => (
      <Link href={item.link} key={item.title}>
        <UnstyledButton className={classes.subLink}>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
              <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.tomato[6]} />
            </ThemeIcon>
            <div>
              <Text size="sm" fw={500} className={classes.subLinkTitle}>
                {item.title}
              </Text>
              <Text size="xs" c="dimmed" className={classes.subLinkDescription}>
                {item.description}
              </Text>
            </div>
          </Group>
        </UnstyledButton>
      </Link>
    ));
  };

  return (
    <Box>
      <div className={classes.header}>
        <Group wrap="nowrap" justify="space-between" h="100%" gap="xm" className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <Logo />
          </div>

          <Group h="100%" gap={0} visibleFrom="md" grow={false} __size="220px" className={classes.centralLinksContainer}>
            {/* Recognitions & Certifications */}
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link href="/recognitions-and-certifications" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Recognitions & Certifications
                    </Box>
                    <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.tomato[6]} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Recognitions & Certifications</Text>
                  <Anchor href="#" fz="sm">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={"sm"}>
                  {getLinks(awarrds)}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Need a custom solution?
                      </Text>
                      <Text size="xs" c="dimmed">
                        Let's discuss your project and find the best solution
                      </Text>
                    </div>
                    <Button component="a" href="/contact-us" rightSection={<IconArrowRight size={14} />} color="tomato.4" variant="outline">
                      Get in touch
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Services */}
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link href="/services" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Services
                    </Box>
                    <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.tomato[6]} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Services</Text>
                  <Anchor href="#" fz="sm">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={"sm"}>
                  {getLinks(services)}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Need a custom solution?
                      </Text>
                      <Text size="xs" c="dimmed">
                        Let's discuss your project and find the best solution
                      </Text>
                    </div>
                    <Button component="a" href="/contact-us" rightSection={<IconArrowRight size={14} />} color="tomato.4" variant="outline">
                      Get in touch
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Consulting & Training */}
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="/services" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Consulting & Training
                    </Box>
                    <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.tomato[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Consulting & Training</Text>
                  <Anchor href="#" fz="sm">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={"sm"}>
                  {getLinks(training)}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Need a custom solution?
                      </Text>
                      <Text size="xs" c="dimmed">
                        Let's discuss your project and find the best solution
                      </Text>
                    </div>
                    <Button component="a" href="/contact-us" rightSection={<IconArrowRight size={14} />} color="tomato.4" variant="outline">
                      Get in touch
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {/* Clients */}
            <Link href="/clients" className={classes.link}>
              Clients
            </Link>
          </Group>

          <Group visibleFrom="md" className={classes.primaryCTAContainer} grow={false} __size="220px">
            <GradientCTA />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="md" />
        </Group>
      </div>

      <Drawer opened={drawerOpened} onClose={closeDrawer} size="100%" padding="md" title="Navigation" hiddenFrom="md" zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {/* Recognitions & Certifications */}
          <UnstyledButton className={classes.link} onClick={toggleAwardsLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse className={classes.subLinkGrid} in={awarrdsLinkOpened}>
            {getLinks(awarrds)}
          </Collapse>

          {/* SERVICES */}
          <UnstyledButton className={classes.link} onClick={toggleServicesLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse className={classes.subLinkGrid} in={servicesLinkOpened}>
            {getLinks(services)}
          </Collapse>

          {/* Consulting & Training */}
          <UnstyledButton className={classes.link} onClick={toggleTrainingLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse className={classes.subLinkGrid} in={trainingLinkOpened}>
            {getLinks(training)}
          </Collapse>

          <Link href="/clients" className={classes.link}>
            Clients
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {/* <Button variant="default">Log in</Button> */}
            {/* <Button>Sign up</Button> */}
            <GradientCTA />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;

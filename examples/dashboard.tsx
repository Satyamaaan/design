import React from 'react';
import {
  Theme,
  Box,
  Container,
  Flex,
  Grid,
  Card,
  Heading,
  Text,
  Button,
  Badge,
  Progress,
  DataList,
  Separator,
  Spinner,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

/**
 * Dashboard Example
 * Shows a typical dashboard layout with:
 * - Header with nav
 * - Grid of metric cards
 * - Data list with status
 * - Activity chart mockup
 */

export default function DashboardExample() {
  return (
    <Theme appearance="light" accentColor="blue">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>
        {/* Header */}
        <Box
          style={{
            backgroundColor: 'var(--color-panel-solid)',
            borderBottom: '1px solid var(--color-border)',
          }}
          p="4"
        >
          <Container>
            <Flex justify="between" align="center">
              <Heading size="6">Dashboard</Heading>
              <Button variant="outline">Settings</Button>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Container p="6">
          <Flex direction="column" gap="6">
            {/* Metrics Grid */}
            <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
              <MetricCard
                title="Total Users"
                value="2,543"
                change="+12%"
                status="up"
              />
              <MetricCard
                title="Active Sessions"
                value="421"
                change="+5%"
                status="up"
              />
              <MetricCard
                title="Conversion"
                value="3.24%"
                change="-2%"
                status="down"
              />
              <MetricCard
                title="Revenue"
                value="$12.5K"
                change="+23%"
                status="up"
              />
            </Grid>

            <Separator />

            {/* Two Column Layout */}
            <Grid columns={{ initial: '1', md: '2' }} gap="6">
              {/* Recent Activity */}
              <Card>
                <Flex direction="column" gap="4">
                  <Heading size="4">Recent Activity</Heading>
                  <Flex direction="column" gap="3">
                    <ActivityItem
                      title="New user signup"
                      time="2 minutes ago"
                      user="Sarah Chen"
                    />
                    <ActivityItem
                      title="Payment processed"
                      time="1 hour ago"
                      user="acme-corp"
                    />
                    <ActivityItem
                      title="Settings updated"
                      time="3 hours ago"
                      user="Team Admin"
                    />
                  </Flex>
                  <Button variant="soft" style={{ marginTop: 'auto' }}>
                    View All
                  </Button>
                </Flex>
              </Card>

              {/* Status Overview */}
              <Card>
                <Flex direction="column" gap="4">
                  <Heading size="4">System Status</Heading>
                  <DataList.Root>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">API Server</DataList.Label>
                      <DataList.Value>
                        <Badge color="green">Healthy</Badge>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">Database</DataList.Label>
                      <DataList.Value>
                        <Badge color="green">Healthy</Badge>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">Cache</DataList.Label>
                      <DataList.Value>
                        <Badge color="yellow">Degraded</Badge>
                      </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label minWidth="88px">CDN</DataList.Label>
                      <DataList.Value>
                        <Badge color="green">Healthy</Badge>
                      </DataList.Value>
                    </DataList.Item>
                  </DataList.Root>
                </Flex>
              </Card>
            </Grid>

            {/* Progress Section */}
            <Card>
              <Flex direction="column" gap="4">
                <Heading size="4">Current Projects</Heading>
                <ProjectProgress title="Website Redesign" progress={75} />
                <ProjectProgress title="Mobile App v2" progress={45} />
                <ProjectProgress title="Analytics Platform" progress={90} />
              </Flex>
            </Card>
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
}

function MetricCard({
  title,
  value,
  change,
  status,
}: {
  title: string;
  value: string;
  change: string;
  status: 'up' | 'down';
}) {
  return (
    <Card>
      <Flex direction="column" gap="2">
        <Text size="2" color="gray">
          {title}
        </Text>
        <Heading size="5">{value}</Heading>
        <Badge color={status === 'up' ? 'green' : 'red'} variant="soft">
          {change}
        </Badge>
      </Flex>
    </Card>
  );
}

function ActivityItem({
  title,
  time,
  user,
}: {
  title: string;
  time: string;
  user: string;
}) {
  return (
    <Flex direction="column" gap="1">
      <Text weight="medium">{title}</Text>
      <Flex justify="between">
        <Text size="1" color="gray">
          {user}
        </Text>
        <Text size="1" color="gray">
          {time}
        </Text>
      </Flex>
    </Flex>
  );
}

function ProjectProgress({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <Flex direction="column" gap="2">
      <Flex justify="between">
        <Text weight="medium">{title}</Text>
        <Text size="1">{progress}%</Text>
      </Flex>
      <Progress value={progress} />
    </Flex>
  );
}

import React, { useState } from 'react';
import {
  Theme,
  Box,
  Container,
  Flex,
  Card,
  Heading,
  Text,
  Button,
  TextField,
  Table,
  Badge,
  Dialog,
} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

/**
 * Table View Example
 * Shows how to build a data table with:
 * - Sortable columns
 * - Search/filter
 * - Status badges
 * - Action buttons
 * - Modal dialog
 */

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'Alice Chen',
    email: 'alice@company.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    email: 'bob@company.com',
    role: 'Editor',
    status: 'active',
    joinDate: '2024-02-20',
  },
  {
    id: 3,
    name: 'Carol Smith',
    email: 'carol@company.com',
    role: 'Viewer',
    status: 'inactive',
    joinDate: '2024-03-10',
  },
  {
    id: 4,
    name: 'David Lee',
    email: 'david@company.com',
    role: 'Editor',
    status: 'pending',
    joinDate: '2024-04-05',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    email: 'emma@company.com',
    role: 'Viewer',
    status: 'active',
    joinDate: '2024-04-12',
  },
];

export default function TableViewExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sortColumn, setSortColumn] = useState<'name' | 'email' | 'role'>('name');

  const filteredUsers = mockUsers
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortColumn].toLowerCase();
      const bVal = b[sortColumn].toLowerCase();
      return aVal.localeCompare(bVal);
    });

  return (
    <Theme appearance="light" accentColor="blue">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--color-surface)' }} p="6">
        <Container>
          <Flex direction="column" gap="6">
            {/* Header */}
            <Flex justify="between" align="center">
              <Heading size="7">User Management</Heading>
              <Button>Add User</Button>
            </Flex>

            {/* Search */}
            <Card>
              <TextField.Root
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%' }}
              />
            </Card>

            {/* Table Card */}
            <Card style={{ overflow: 'auto' }}>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>
                      <SortButton
                        label="Name"
                        active={sortColumn === 'name'}
                        onClick={() => setSortColumn('name')}
                      />
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <SortButton
                        label="Email"
                        active={sortColumn === 'email'}
                        onClick={() => setSortColumn('email')}
                      />
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      <SortButton
                        label="Role"
                        active={sortColumn === 'role'}
                        onClick={() => setSortColumn('role')}
                      />
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {filteredUsers.map((user) => (
                    <Table.Row key={user.id}>
                      <Table.Cell>
                        <Text weight="medium">{user.name}</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2" color="gray">
                          {user.email}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>{user.role}</Table.Cell>
                      <Table.Cell>
                        <StatusBadge status={user.status} />
                      </Table.Cell>
                      <Table.Cell>
                        <Text size="2" color="gray">
                          {new Date(user.joinDate).toLocaleDateString()}
                        </Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Flex gap="2">
                          <Dialog.Root>
                            <Dialog.Trigger>
                              <Button
                                variant="soft"
                                size="1"
                                onClick={() => setSelectedUser(user)}
                              >
                                View
                              </Button>
                            </Dialog.Trigger>
                            <Dialog.Content>
                              <Dialog.Title>User Details</Dialog.Title>
                              {selectedUser && (
                                <Flex direction="column" gap="3">
                                  <Flex gap="2">
                                    <Text weight="medium" style={{ width: '100px' }}>
                                      Name:
                                    </Text>
                                    <Text>{selectedUser.name}</Text>
                                  </Flex>
                                  <Flex gap="2">
                                    <Text weight="medium" style={{ width: '100px' }}>
                                      Email:
                                    </Text>
                                    <Text>{selectedUser.email}</Text>
                                  </Flex>
                                  <Flex gap="2">
                                    <Text weight="medium" style={{ width: '100px' }}>
                                      Role:
                                    </Text>
                                    <Text>{selectedUser.role}</Text>
                                  </Flex>
                                  <Flex gap="2">
                                    <Text weight="medium" style={{ width: '100px' }}>
                                      Status:
                                    </Text>
                                    <StatusBadge status={selectedUser.status} />
                                  </Flex>
                                  <Flex gap="2">
                                    <Text weight="medium" style={{ width: '100px' }}>
                                      Joined:
                                    </Text>
                                    <Text>
                                      {new Date(selectedUser.joinDate).toLocaleDateString()}
                                    </Text>
                                  </Flex>
                                </Flex>
                              )}
                              <Flex gap="2" justify="end" style={{ marginTop: '16px' }}>
                                <Dialog.Close>
                                  <Button variant="soft">Close</Button>
                                </Dialog.Close>
                                <Button>Edit User</Button>
                              </Flex>
                            </Dialog.Content>
                          </Dialog.Root>
                          <Button variant="outline" size="1" color="red">
                            Delete
                          </Button>
                        </Flex>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Card>

            {/* Footer Info */}
            <Flex justify="between" align="center">
              <Text size="2" color="gray">
                Showing {filteredUsers.length} of {mockUsers.length} users
              </Text>
              <Flex gap="2">
                <Button variant="soft" disabled>
                  Previous
                </Button>
                <Button variant="soft">Next</Button>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
}

function SortButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontSize: 'inherit',
        fontWeight: active ? 'bold' : 'normal',
        color: active ? 'var(--accent-color)' : 'inherit',
      }}
    >
      {label} {active && '↑'}
    </button>
  );
}

function StatusBadge({ status }: { status: 'active' | 'inactive' | 'pending' }) {
  const colorMap = {
    active: 'green' as const,
    inactive: 'gray' as const,
    pending: 'yellow' as const,
  };

  const labelMap = {
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
  };

  return (
    <Badge color={colorMap[status]} variant="soft">
      {labelMap[status]}
    </Badge>
  );
}

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// --- Widget Data with Enhanced Metrics ---
const widgetData = [
  { label: 'Total Inquiries', value: 245, change: '+12.5%', icon: <i className="fa-solid fa-users"></i>, color: '#1976d2', status: '' },
  { label: 'Trip Inquiries', value: 156, change: '+8.2%', icon: <i className="fa-solid fa-map-marker-alt"></i>, color: '#43a047', status: '' },
  { label: 'Hotel Inquiries', value: 67, change: '+15.3%', icon: <i className="fa-solid fa-building"></i>, color: '#fbc02d', status: '' },
  { label: 'Activity Inquiries', value: 22, change: '+5.8%', icon: <i className="fa-solid fa-chart-line"></i>, color: '#e53935', status: '' },
  { label: 'Follow-ups Today', value: 18, change: '', icon: <i className="fa-solid fa-calendar-check"></i>, color: '#8e24aa', status: 'Due today' },
  { label: 'Converted Leads', value: 89, change: '+22.1%', icon: <i className="fa-solid fa-trending-up"></i>, color: '#00bcd4', status: '' },
  { label: 'New Leads', value: 34, change: '', icon: <i className="fa-solid fa-user-plus"></i>, color: '#ff9800', status: 'Last 7 days' },
];

// --- Enhanced Placeholder Data ---
const placeholderLeads = [
  {
    id: 'LD001',
    name: 'John Smith',
    phone: '+91 9876543210',
    destination: 'Dubai',
    tripType: 'Honeymoon',
    leadSource: 'Website',
    lastUpdate: '2024-01-15 10:30 by Sarah',
    assignedTo: 'Mike Johnson',
    status: 'New',
    followUp: '2024-01-20',
    budget: 2000,
  },
  {
    id: 'LD002',
    name: 'Emily Davis',
    phone: '+91 9876543211',
    destination: 'Switzerland',
    tripType: 'Family',
    leadSource: 'Instagram',
    lastUpdate: '2024-01-14 16:45 by Alex',
    assignedTo: 'Sarah Wilson',
    status: 'In Progress',
    followUp: '2024-01-18',
    budget: 1500,
  },
  // Add more leads as needed
];

const teamMembers = ['Alice', 'Bob', 'Charlie', 'Mike Johnson', 'Sarah Wilson'];
const statusOptions = ['New', 'In Progress', 'Follow-up', 'Converted', 'Lost'];
const destinationOptions = ['Paris', 'London', 'Rome', 'Dubai', 'Switzerland'];
const tripTypeOptions = ['Family', 'Solo', 'Group', 'Honeymoon'];
const leadSourceOptions = ['Website', 'Facebook', 'Instagram', 'WhatsApp'];

const LeadManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [leads, setLeads] = useState(placeholderLeads);
  const [selected, setSelected] = useState([]);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    status: '',
    destination: '',
    tripType: '',
    assignedTo: '',
    leadSource: '',
    budgetMin: '',
    budgetMax: '',
  });
  const [selectedLead, setSelectedLead] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [newLead, setNewLead] = useState({
    name: '',
    mobile: '',
    email: '',
    leadSource: '',
    tripType: '',
    destination: '',
    pickupLocation: '',
    travelFrom: '',
    travelTo: '',
    adults: '',
    children: '',
    budget: '',
    hotelPref: '',
    travelMode: '',
    specialReq: '',
    assignedTo: '',
    status: 'New',
    followUp: '',
    followUpTime: '',
    notes: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.dropdown-container')) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  const validateLeadForm = () => {
    const errors = {};
    if (!newLead.name.trim()) errors.name = 'Name is required.';
    if (!newLead.mobile.trim()) {
      errors.mobile = 'Mobile number is required.';
    } else if (!/^\d{10,15}$/.test(newLead.mobile.trim())) {
      errors.mobile = 'Enter a valid phone number.';
    }
    if (newLead.email && !/^\S+@\S+\.\S+$/.test(newLead.email.trim())) {
      errors.email = 'Enter a valid email address.';
    }
    if (!newLead.leadSource) errors.leadSource = 'Lead source is required.';
    if (!newLead.tripType) errors.tripType = 'Trip type is required.';
    if (!newLead.destination) errors.destination = 'Destination is required.';
    if (!newLead.assignedTo) errors.assignedTo = 'Assign to is required.';
    if (!newLead.status) errors.status = 'Status is required.';
    return errors;
  };

  const handleSelectAll = (e) => {
    setSelected(e.target.checked ? filteredLeads.map(l => l.id) : []);
  };
  const handleSelect = (id) => {
    setSelected(selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]);
  };


  const filteredLeads = leads.filter(lead => {
    const dateOk = (!filters.dateFrom || lead.followUp >= filters.dateFrom) && (!filters.dateTo || lead.followUp <= filters.dateTo);
    const statusOk = !filters.status || lead.status === filters.status;
    const destOk = !filters.destination || lead.destination === filters.destination;
    const tripTypeOk = !filters.tripType || lead.tripType === filters.tripType;
    const assignedOk = !filters.assignedTo || lead.assignedTo === filters.assignedTo;
    const sourceOk = !filters.leadSource || lead.leadSource === filters.leadSource;
    const budgetOk = (!filters.budgetMin || lead.budget >= Number(filters.budgetMin)) && (!filters.budgetMax || lead.budget <= Number(filters.budgetMax));
    return dateOk && statusOk && destOk && tripTypeOk && assignedOk && sourceOk && budgetOk;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(f => ({ ...f, [name]: value }));
  };
  const handleResetFilters = () => {
    setFilters({
      dateFrom: '', dateTo: '', status: '', destination: '', tripType: '', assignedTo: '', leadSource: '', budgetMin: '', budgetMax: ''
    });
  };

  const handleNewLeadChange = (e) => {
    const { name, value } = e.target;
    setNewLead(l => ({ ...l, [name]: value }));
  };
  const handleAddLead = () => {
    const errors = validateLeadForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    
    const id = `LD-${(leads.length + 1).toString().padStart(4, '0')}`;
    const newLeadData = {
      id,
      name: newLead.name,
      phone: newLead.mobile, // Add phone number
      destination: newLead.destination,
      tripType: newLead.tripType,
      leadSource: newLead.leadSource,
      lastUpdate: new Date().toISOString().slice(0, 16).replace('T', ' ') + ' (Admin)',
      assignedTo: newLead.assignedTo,
      status: newLead.status,
      followUp: newLead.followUp,
      budget: newLead.budget,
      // Add more fields as needed
    };
    
    setLeads([newLeadData, ...leads]);
    setAddModalOpen(false);
    setNewLead({
      name: '', mobile: '', email: '', leadSource: '', tripType: '', destination: '', pickupLocation: '', travelFrom: '', travelTo: '', adults: '', children: '', budget: '', hotelPref: '', travelMode: '', specialReq: '', assignedTo: '', status: 'New', followUp: '', followUpTime: '', notes: ''
    });
    setFormErrors({});
  };

  // Action Handlers
  const handleEditLead = (lead) => {
    setEditingLead(lead);
    setEditModalOpen(true);
    setDropdownOpen(null);
  };



  const handleDeleteLead = (leadId) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads(leads.filter(l => l.id !== leadId));
      setDropdownOpen(null);
    }
  };

  const handleSaveEdit = () => {
    if (editingLead) {
      setLeads(leads.map(l => l.id === editingLead.id ? editingLead : l));
      setEditModalOpen(false);
      setEditingLead(null);
    }
  };

  const handleExportTable = () => {
    // Create CSV content with headers
    const headers = [
      'Lead ID',
      'Name', 
      'Phone',
      'Destination',
      'Trip Type',
      'Lead Source',
      'Last Update',
      'Assigned To',
      'Status',
      'Follow-up Date',
      'Budget'
    ];

    // Create CSV rows from filtered leads
    const csvRows = filteredLeads.map(lead => [
      lead.id,
      lead.name,
      lead.phone || '',
      lead.destination,
      lead.tripType,
      lead.leadSource,
      lead.lastUpdate,
      lead.assignedTo,
      lead.status,
      lead.followUp,
      lead.budget || ''
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...csvRows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };



  return (
    <div className="lead-management-page" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Tab Bar for LD and QB */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: 0, background: '#fff', borderRadius: '8px', padding: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', width: 'fit-content' }}>
          <button
            onClick={() => navigate('/admin/lead-management')}
            style={{
              background: location.pathname === '/admin/lead-management' ? '#1976d2' : 'transparent',
              color: location.pathname === '/admin/lead-management' ? '#fff' : '#666',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '6px',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: 16,
              letterSpacing: 1
            }}
          >
            Lead Management
          </button>
          <button
            onClick={() => navigate('/admin/quote-builder')}
            style={{
              background: location.pathname === '/admin/quote-builder' ? '#1976d2' : 'transparent',
              color: location.pathname === '/admin/quote-builder' ? '#fff' : '#666',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '6px',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: 16,
              letterSpacing: 1
            }}
          >
            Quote Builder
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Lead Management</h1>
        <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>Manage inquiries, follow-ups, and convert leads to bookings.</p>
      </div>

      {/* Enhanced Top Widgets Section */}
      <div className="lead-widgets-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2.5rem',
      }}>
        {widgetData.map((w, idx) => (
          <div
            key={w.label}
            className="lead-widget-card"
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              padding: '1.5rem',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div style={{ fontSize: '2rem', color: w.color }}>{w.icon}</div>
              <div style={{ textAlign: 'right' }}>
                {w.change && <div style={{ fontSize: '14px', color: '#43a047', fontWeight: 600 }}>{w.change}</div>}
                {w.status && <div style={{ fontSize: '12px', color: '#666' }}>{w.status}</div>}
              </div>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>{w.value}</div>
            <div style={{ color: '#666', fontWeight: 500, fontSize: '14px' }}>{w.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        {/* Section Header with Action Bar */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>Lead Management</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              style={{ 
                background: '#f5f5f5', 
                color: '#666', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: 500, 
                cursor: 'pointer',
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <i className="fa-solid fa-filter"></i>
              Filters
            </button>

            <button 
              onClick={handleExportTable}
              style={{ 
                background: '#f5f5f5', 
                color: '#666', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: 500, 
                cursor: 'pointer',
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <i className="fa-solid fa-download"></i>
              Export
            </button>
            <button 
              onClick={() => setAddModalOpen(true)}
              style={{ 
                background: '#1976d2', 
                color: '#fff', 
                border: 'none', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontWeight: 600, 
                cursor: 'pointer',
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <i className="fa-solid fa-plus"></i>
              Add Lead
            </button>
          </div>
        </div>

        {/* Filter Bar - Now Collapsible */}
        {showFilters && (
          <div className="filter-bar" style={{
            display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', padding: '1rem 1.5rem', background: '#f8fafc', borderBottom: '1px solid #f0f0f0'
          }}>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Date From</label><br />
              <input type="date" name="dateFrom" value={filters.dateFrom} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }} />
            </div>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Date To</label><br />
              <input type="date" name="dateTo" value={filters.dateTo} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }} />
            </div>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Status</label><br />
              <select name="status" value={filters.status} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }}>
                <option value="">All</option>
                {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Destination</label><br />
              <select name="destination" value={filters.destination} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }}>
                <option value="">All</option>
                {destinationOptions.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Trip Type</label><br />
              <select name="tripType" value={filters.tripType} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }}>
                <option value="">All</option>
                {tripTypeOptions.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Assigned To</label><br />
              <select name="assignedTo" value={filters.assignedTo} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }}>
                <option value="">All</option>
                {teamMembers.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div className="filter-field" style={{ minWidth: 140, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Lead Source</label><br />
              <select name="leadSource" value={filters.leadSource} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }}>
                <option value="">All</option>
                {leadSourceOptions.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="filter-field" style={{ minWidth: 100, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Budget Min</label><br />
              <input type="number" name="budgetMin" value={filters.budgetMin} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }} />
            </div>
            <div className="filter-field" style={{ minWidth: 100, flex: 1 }}>
              <label style={{ fontWeight: 500 }}>Budget Max</label><br />
              <input type="number" name="budgetMax" value={filters.budgetMax} onChange={handleFilterChange} style={{ borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px', width: '100%' }} />
            </div>
            <div className="filter-field" style={{ minWidth: 120, flex: 1, alignSelf: 'end' }}>
              <button onClick={handleResetFilters} style={{ background: '#fff', border: '1px solid #1976d2', color: '#1976d2', borderRadius: 4, padding: '6px 16px', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Reset</button>
            </div>
          </div>
        )}

        {/* Enhanced Lead List Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="lead-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f0f0f0' }}>
              <tr>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>
                  <input type="checkbox" checked={selected.length === filteredLeads.length && filteredLeads.length > 0} onChange={handleSelectAll} />
                </th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Lead ID</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Name</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Destination</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Trip Type</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Lead Source</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Last Update</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Assigned To</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Status</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Follow-up Date</th>
                <th style={{ padding: '16px', textAlign: 'left', fontWeight: 600, color: '#666', fontSize: '14px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={11} style={{ textAlign: 'center', color: '#888', padding: '3rem' }}>
                    <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 32, marginBottom: 8 }}></i>
                    <div>No leads found for the selected filters.</div>
                    <button onClick={handleResetFilters} style={{ marginTop: 12, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 20px', fontWeight: 600, cursor: 'pointer' }}>Reset Filters</button>
                  </td>
                </tr>
              ) : filteredLeads.map((lead, idx) => (
                <tr
                  key={lead.id}
                  style={{
                    background: selected.includes(lead.id) ? '#e3f2fd' : idx % 2 === 0 ? '#fff' : '#fafbfc',
                    borderBottom: '1px solid #f0f0f0',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = selected.includes(lead.id) ? '#e3f2fd' : '#f8fafc'}
                  onMouseLeave={e => e.currentTarget.style.background = selected.includes(lead.id) ? '#e3f2fd' : idx % 2 === 0 ? '#fff' : '#fafbfc'}
                >
                  <td style={{ padding: '16px' }}>
                    <input
                      type="checkbox"
                      checked={selected.includes(lead.id)}
                      onChange={() => handleSelect(lead.id)}
                    />
                  </td>
                  <td style={{ padding: '16px' }}>
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#1976d2',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '14px'
                      }}
                      title="View Lead Details"
                      onClick={() => setSelectedLead(lead)}
                    >
                      {lead.id}
                    </button>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <div>
                      <button
                        onClick={() => navigate('/admin/quote-builder', { 
                          state: { 
                            leadData: {
                              name: lead.name,
                              phone: lead.phone,
                              destination: lead.destination,
                              tripType: lead.tripType
                            }
                          } 
                        })}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#1976d2',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '14px',
                          padding: 0,
                          textAlign: 'left'
                        }}
                        title="Create Quote for this Lead"
                      >
                        {lead.name}
                      </button>
                      <div style={{ color: '#666', fontSize: '12px' }}>{lead.phone}</div>
                    </div>
                  </td>
                  <td style={{ padding: '16px', color: '#1a1a1a', fontSize: '14px' }}>{lead.destination}</td>
                  <td style={{ padding: '16px', color: '#1a1a1a', fontSize: '14px' }}>{lead.tripType}</td>
                  <td style={{ padding: '16px', color: '#1a1a1a', fontSize: '14px' }}>{lead.leadSource}</td>
                  <td style={{ padding: '16px', color: '#666', fontSize: '12px' }}>{lead.lastUpdate}</td>
                  <td style={{ padding: '16px', color: '#1a1a1a', fontSize: '14px' }}>{lead.assignedTo}</td>
                  <td style={{ padding: '16px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: 12,
                        background: {
                          'New': '#e3f2fd',
                          'In Progress': '#fffde7',
                          'Follow-up': '#e8f5e9',
                          'Converted': '#e0f7fa',
                          'Lost': '#ffebee'
                        }[lead.status] || '#f5f5f5',
                        color: {
                          'New': '#1976d2',
                          'In Progress': '#fbc02d',
                          'Follow-up': '#43a047',
                          'Converted': '#00bcd4',
                          'Lost': '#e53935'
                        }[lead.status] || '#555',
                        fontWeight: 600,
                        fontSize: 12
                      }}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px', color: '#666', fontSize: '12px' }}>{lead.followUp}</td>
                  <td style={{ padding: '16px', position: 'relative' }}>
                    {/* Actions Dropdown */}
                    <div className="dropdown-container" style={{ position: 'relative' }}>
                      <button
                        onClick={() => setDropdownOpen(dropdownOpen === lead.id ? null : lead.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#666',
                          fontSize: 16,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title="Actions"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </button>
                      
                      {dropdownOpen === lead.id && (
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          right: 0,
                          background: '#fff',
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          zIndex: 1000,
                          minWidth: '120px',
                          padding: '8px 0'
                        }}>
                          <button
                            onClick={() => handleEditLead(lead)}
                            style={{
                              width: '100%',
                              background: 'none',
                              border: 'none',
                              padding: '8px 16px',
                              textAlign: 'left',
                              cursor: 'pointer',
                              fontSize: '13px',
                              color: '#333',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                            onMouseOver={e => e.target.style.background = '#f5f5f5'}
                            onMouseOut={e => e.target.style.background = 'none'}
                          >
                            <i className="fa-solid fa-edit" style={{ fontSize: '11px', color: '#1976d2' }}></i>
                            Edit
                          </button>
                          
                          <div style={{ borderTop: '1px solid #e0e0e0', margin: '4px 0' }}></div>
                          
                          <button
                            onClick={() => handleDeleteLead(lead.id)}
                            style={{
                              width: '100%',
                              background: 'none',
                              border: 'none',
                              padding: '8px 16px',
                              textAlign: 'left',
                              cursor: 'pointer',
                              fontSize: '13px',
                              color: '#d32f2f',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                            onMouseOver={e => e.target.style.background = '#ffebee'}
                            onMouseOut={e => e.target.style.background = 'none'}
                          >
                            <i className="fa-solid fa-trash" style={{ fontSize: '11px' }}></i>
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Lead Modal */}
      {addModalOpen && (
        <div className="modal-backdrop" onClick={() => setAddModalOpen(false)}>
          <div
            className="modal-content"
            style={{
              maxWidth: 480,
              width: '100%',
              borderRadius: 18,
              boxShadow: '0 8px 32px rgba(25,118,210,0.12)',
              padding: '2.2rem 1.2rem',
              position: 'relative',
              margin: '0 auto',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{
              marginBottom: 24,
              textAlign: 'center',
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: 22
            }}>Add New Lead</h2>
            <form onSubmit={e => { e.preventDefault(); handleAddLead(); }}>
              {/* --- Personal Details --- */}
              <div style={{ marginBottom: 24 }}>
                <div className="section-header" style={{ fontWeight: 600, fontSize: 15, marginBottom: 10, color: '#1976d2' }}>Personal Details</div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Name <span style={{ color: 'red' }}>*</span></label>
                    <input
                      name="name"
                      value={newLead.name}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.name ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    />
                    {formErrors.name && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.name}</div>}
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Mobile Number <span style={{ color: 'red' }}>*</span></label>
                    <input
                      name="mobile"
                      value={newLead.mobile}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.mobile ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    />
                    {formErrors.mobile && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.mobile}</div>}
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Email</label>
                    <input
                      name="email"
                      value={newLead.email}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderColor: formErrors.email ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    />
                    {formErrors.email && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.email}</div>}
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Lead Source <span style={{ color: 'red' }}>*</span></label>
                    <select
                      name="leadSource"
                      value={newLead.leadSource}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.leadSource ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    >
                      <option value="">Select</option>
                      {leadSourceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {formErrors.leadSource && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.leadSource}</div>}
                  </div>
                </div>
              </div>

              {/* --- Travel Details --- */}
              <div style={{ marginBottom: 24 }}>
                <div className="section-header" style={{ fontWeight: 600, fontSize: 15, marginBottom: 10, color: '#1976d2' }}>Travel Details</div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Trip Type <span style={{ color: 'red' }}>*</span></label>
                    <select
                      name="tripType"
                      value={newLead.tripType}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.tripType ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    >
                      <option value="">Select</option>
                      {tripTypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {formErrors.tripType && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.tripType}</div>}
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Destination <span style={{ color: 'red' }}>*</span></label>
                    <input
                      name="destination"
                      value={newLead.destination}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.destination ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    />
                    {formErrors.destination && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.destination}</div>}
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Pickup Location</label>
                    <input
                      name="pickupLocation"
                      value={newLead.pickupLocation}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Travel Mode</label>
                    <input
                      name="travelMode"
                      value={newLead.travelMode}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Travel Dates (From)</label>
                    <input
                      type="date"
                      name="travelFrom"
                      value={newLead.travelFrom}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Travel Dates (To)</label>
                    <input
                      type="date"
                      name="travelTo"
                      value={newLead.travelTo}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>No. of Adults</label>
                    <input
                      type="number"
                      name="adults"
                      value={newLead.adults}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>No. of Children</label>
                    <input
                      type="number"
                      name="children"
                      value={newLead.children}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Budget</label>
                    <input
                      name="budget"
                      value={newLead.budget}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Hotel Preference</label>
                    <input
                      name="hotelPref"
                      value={newLead.hotelPref}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Special Requests</label>
                    <input
                      name="specialReq"
                      value={newLead.specialReq}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* --- Lead Management --- */}
              <div style={{ marginBottom: 24 }}>
                <div className="section-header" style={{ fontWeight: 600, fontSize: 15, marginBottom: 10, color: '#1976d2' }}>Lead Management</div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Assign To <span style={{ color: 'red' }}>*</span></label>
                    <select
                      name="assignedTo"
                      value={newLead.assignedTo}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.assignedTo ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    >
                      <option value="">Select</option>
                      {teamMembers.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {formErrors.assignedTo && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.assignedTo}</div>}
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Status <span style={{ color: 'red' }}>*</span></label>
                    <select
                      name="status"
                      value={newLead.status}
                      onChange={handleNewLeadChange}
                      required
                      style={{
                        width: '100%',
                        borderColor: formErrors.status ? '#e57373' : '#ccc',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                      }}
                    >
                      {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {formErrors.status && <div style={{ color: '#e57373', fontSize: 12, marginTop: 2 }}><i className="fa-solid fa-circle-exclamation" style={{ marginRight: 4 }} />{formErrors.status}</div>}
                  </div>
                </div>
                <div className="form-row" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Follow-up Date</label>
                    <input
                      type="date"
                      name="followUp"
                      value={newLead.followUp}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                  <div className="form-field" style={{ flex: 1, minWidth: 180, marginBottom: 12 }}>
                    <label>Follow-up Time</label>
                    <input
                      type="time"
                      name="followUpTime"
                      value={newLead.followUpTime}
                      onChange={handleNewLeadChange}
                      style={{
                        width: '100%',
                        borderRadius: 6,
                        padding: '10px 12px',
                        marginTop: 2,
                        background: '#f8fafc',
                        outline: 'none',
                        fontSize: 15,
                        border: '1px solid #ccc'
                      }}
                    />
                  </div>
                </div>
                <div style={{ marginTop: 10 }}>
                  <label>Notes</label>
                  <textarea
                    name="notes"
                    value={newLead.notes}
                    onChange={handleNewLeadChange}
                    style={{
                      width: '100%',
                      borderRadius: 6,
                      padding: '10px 12px',
                      marginTop: 2,
                      background: '#f8fafc',
                      outline: 'none',
                      fontSize: 15,
                      border: '1px solid #ccc',
                      minHeight: 60,
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              <div className="modal-buttons" style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  style={{
                    background: '#fff',
                    color: '#1976d2',
                    border: '1.5px solid #1976d2',
                    borderRadius: 6,
                    padding: '10px 28px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s',
                    flex: 1,
                    minWidth: 120,
                    maxWidth: 180
                  }}
                  onMouseOver={e => { e.target.style.background = '#e3f2fd'; }}
                  onMouseOut={e => { e.target.style.background = '#fff'; }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '10px 28px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 16,
                    boxShadow: '0 2px 8px rgba(25,118,210,0.08)',
                    transition: 'background 0.2s',
                    flex: 1,
                    minWidth: 120,
                    maxWidth: 180
                  }}
                  onMouseOver={e => { e.target.style.background = '#115293'; }}
                  onMouseOut={e => { e.target.style.background = '#1976d2'; }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Lead Modal */}
      {editModalOpen && editingLead && (
        <div className="modal-backdrop" onClick={() => setEditModalOpen(false)}>
          <div
            className="modal-content"
            style={{
              maxWidth: 480,
              width: '100%',
              borderRadius: 18,
              boxShadow: '0 8px 32px rgba(25,118,210,0.12)',
              padding: '2.2rem 1.2rem',
              position: 'relative',
              margin: '0 auto',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{
              marginBottom: 24,
              textAlign: 'center',
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: 22
            }}>Edit Lead: {editingLead.id}</h2>
            
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Name</label>
              <input
                value={editingLead.name}
                onChange={(e) => setEditingLead({...editingLead, name: e.target.value})}
                style={{
                  width: '100%',
                  borderRadius: 6,
                  padding: '10px 12px',
                  border: '1px solid #ccc',
                  fontSize: 15
                }}
              />
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Destination</label>
              <input
                value={editingLead.destination}
                onChange={(e) => setEditingLead({...editingLead, destination: e.target.value})}
                style={{
                  width: '100%',
                  borderRadius: 6,
                  padding: '10px 12px',
                  border: '1px solid #ccc',
                  fontSize: 15
                }}
              />
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Status</label>
              <select
                value={editingLead.status}
                onChange={(e) => setEditingLead({...editingLead, status: e.target.value})}
                style={{
                  width: '100%',
                  borderRadius: 6,
                  padding: '10px 12px',
                  border: '1px solid #ccc',
                  fontSize: 15
                }}
              >
                {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Assigned To</label>
              <select
                value={editingLead.assignedTo}
                onChange={(e) => setEditingLead({...editingLead, assignedTo: e.target.value})}
                style={{
                  width: '100%',
                  borderRadius: 6,
                  padding: '10px 12px',
                  border: '1px solid #ccc',
                  fontSize: 15
                }}
              >
                {teamMembers.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 600, marginBottom: 8, display: 'block' }}>Follow-up Date</label>
              <input
                type="date"
                value={editingLead.followUp}
                onChange={(e) => setEditingLead({...editingLead, followUp: e.target.value})}
                style={{
                  width: '100%',
                  borderRadius: 6,
                  padding: '10px 12px',
                  border: '1px solid #ccc',
                  fontSize: 15
                }}
              />
            </div>

            <div className="modal-buttons" style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setEditModalOpen(false)}
                style={{
                  background: '#fff',
                  color: '#1976d2',
                  border: '1.5px solid #1976d2',
                  borderRadius: 6,
                  padding: '10px 28px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                style={{
                  background: '#1976d2',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '10px 28px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}



      {/* Lead Details Modal (simple example) */}
      {selectedLead && (
        <div className="modal-backdrop" onClick={() => setSelectedLead(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Lead Details: {selectedLead.id}</h2>
            <p><b>Name:</b> {selectedLead.name}</p>
            <p><b>Destination:</b> {selectedLead.destination}</p>
            <p><b>Trip Type:</b> {selectedLead.tripType}</p>
            <p><b>Status:</b> {selectedLead.status}</p>
            <p><b>Assigned To:</b> {selectedLead.assignedTo}</p>
            {/* Add more details and actions here */}
            <button onClick={() => setSelectedLead(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadManagement; 
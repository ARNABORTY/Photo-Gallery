function AdminPage({ users, photos }) {
  return (
    <section className="admin-page">
      <div className="dashboard-intro"><div><p className="eyebrow">Operations / restricted</p><h1>Gallery overview</h1><p className="subtitle">A quiet view of members and the images they have added.</p></div><span className="admin-lock">Admin access</span></div>
      <div className="admin-stats"><div><span>Members</span><strong>{users.length}</strong></div><div><span>Total uploads</span><strong>{photos.length}</strong></div><div><span>Last activity</span><strong>Today</strong></div></div>
      <div className="admin-table-wrap"><div className="section-heading"><div><span className="form-kicker">Member activity</span><h2>People and uploads</h2></div></div><table><thead><tr><th>Account</th><th>Role</th><th>Joined</th><th>Uploads</th><th>Status</th></tr></thead><tbody>{users.map((member) => <tr key={member.email}><td><strong>{member.name}</strong><small>{member.email}</small></td><td><span className="role-tag">{member.role}</span></td><td>{member.joined}</td><td>{member.uploads}</td><td><span className="status-dot">Active</span></td></tr>)}</tbody></table></div>
      <div className="admin-upload-list"><div className="section-heading"><div><span className="form-kicker">Latest files</span><h2>Recent uploads</h2></div></div>{photos.slice(0, 4).map((photo) => <div className="upload-row" key={photo.id}><img src={photo.src} alt="" /><div><strong>{photo.title}</strong><span>{photo.category} / uploaded by {photo.owner}</span></div><span className="upload-date">Today</span></div>)}</div>
    </section>
  )
}

export default AdminPage

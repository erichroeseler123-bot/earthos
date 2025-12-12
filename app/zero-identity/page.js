export default function ZeroIdentityPage() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px",
      color: "#b2ffff",
      fontFamily: "IBM Plex Mono, monospace"
    }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Zero Identity Domain™
      </h1>

      <p style={{ lineHeight: "1.8" }}>
        EarthOS does not know who you are — by design. A Zero Identity Domain is a
        digital environment that never stores personal identity, never builds
        profiles, and never retains behavioral data.
      </p>

      <h2>1. No Accounts, No Profiles</h2>
      <p>
        No login. No signup. No identity graph. EarthOS stores nothing about you.
      </p>

      <h2>2. No Tracking, No Selling</h2>
      <p>
        No personal data is collected or transmitted. Nothing is ever used for
        advertising or analytics tied to individuals.
      </p>

      <h2>3. Ephemeral by Default</h2>
      <p>
        EarthOS forgets everything instantly. Sessions leave no trace.
      </p>

      <p style={{ marginTop: "40px", fontStyle: "italic" }}>
        EarthOS: A Zero Identity Domain.
      </p>
    </div>
  );
}

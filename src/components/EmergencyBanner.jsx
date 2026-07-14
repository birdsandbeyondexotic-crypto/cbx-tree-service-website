import React, { useState } from 'react';
import { AlertTriangle, Phone, X } from 'lucide-react';

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <aside className="emergencyBanner" aria-label="Emergency tree service">
      <div className="emergencyBannerInner">
        <div className="emergencyIcon" aria-hidden="true">
          <AlertTriangle size={22} />
        </div>

        <div className="emergencyCopy">
          <strong>Emergency Tree Service</strong>
          <span>Storm damage or an urgent tree hazard? Fast local response is available.</span>
        </div>

        <a className="emergencyCall" href="tel:+12392380783">
          <Phone size={17} />
          <span>Call (239) 238-0783</span>
        </a>

        <button
          className="emergencyDismiss"
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss emergency banner"
        >
          <X size={18} />
        </button>
      </div>
    </aside>
  );
}

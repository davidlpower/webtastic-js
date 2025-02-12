import { SubEvent } from "sub-events";
import * as Protobuf from "../protobufs.js";
import { PacketMetadata } from "../types.js";
import * as Types from "../types.js";

export class EventSystem {
  /**
   * Fires when a new FromRadio message has been received from the device
   *
   * @event onLogEvent
   */
  public readonly onLogEvent = new SubEvent<Types.LogEventPacket>();

  /**
   * Fires when a new FromRadio message has been received from the device
   *
   * @event onFromRadio
   */
  public readonly onFromRadio = new SubEvent<Protobuf.Mesh.FromRadio>();

  /**
   * Fires when a new FromRadio message containing a Data packet has been
   * received from the device
   *
   * @event onMeshPacket
   */
  public readonly onMeshPacket = new SubEvent<Protobuf.Mesh.MeshPacket>();

  /**
   * Fires when a new MyNodeInfo message has been received from the device
   *
   * @event onMyNodeInfo
   */
  public readonly onMyNodeInfo = new SubEvent<Protobuf.Mesh.MyNodeInfo>();

  /**
   * Fires when a new MeshPacket message containing a NodeInfo packet has been
   * received from device
   *
   * @event onNodeInfoPacket
   */
  public readonly onNodeInfoPacket = new SubEvent<Protobuf.Mesh.NodeInfo>();

  /**
   * Fires when a new MeshPacket message containing a User packet has been
   * received from device
   *
   * @event onUserPacket
   */
  public readonly onUserPacket = new SubEvent<
    PacketMetadata<Protobuf.Mesh.User>
  >();

  /**
   * Fires when a new Channel message is recieved
   *
   * @event onChannelPacket
   */
  public readonly onChannelPacket = new SubEvent<Protobuf.Channel.Channel>();

  /**
   * Fires when a new Config message is recieved
   *
   * @event onConfigPacket
   */
  public readonly onConfigPacket = new SubEvent<Protobuf.Config.Config>();

  /**
   * Fires when a new ModuleConfig message is recieved
   *
   * @event onModuleConfigPacket
   */
  public readonly onModuleConfigPacket =
    new SubEvent<Protobuf.ModuleConfig.ModuleConfig>();

  /**
   * Fires when a new MeshPacket message containing a Ping packet has been
   * received from device
   *
   * @event onPingPacket
   */
  public readonly onPingPacket = new SubEvent<PacketMetadata<Uint8Array>>();

  /**
   * Fires when a new MeshPacket message containing a IP Tunnel packet has been
   * received from device
   *
   * @event onIpTunnelPacket
   */

  public readonly onIpTunnelPacket = new SubEvent<PacketMetadata<Uint8Array>>();

  /**
   * Fires when a new MeshPacket message containing a Serial packet has been
   * received from device
   *
   * @event onSerialPacket
   */

  public readonly onSerialPacket = new SubEvent<PacketMetadata<Uint8Array>>();
  /**
   * Fires when a new MeshPacket message containing a Store and Forward packet
   * has been received from device
   *
   * @event onStoreForwardPacket
   */
  public readonly onStoreForwardPacket = new SubEvent<
    PacketMetadata<Uint8Array>
  >();

  /**
   * Fires when a new MeshPacket message containing a Store and Forward packet
   * has been received from device
   *
   * @event onRangeTestPacket
   */
  public readonly onRangeTestPacket = new SubEvent<
    PacketMetadata<Uint8Array>
  >();

  /**
   * Fires when a new MeshPacket message containing a Telemetry packet has been
   * received from device
   *
   * @event onTelemetryPacket
   */
  public readonly onTelemetryPacket = new SubEvent<
    PacketMetadata<Protobuf.Telemetry.Telemetry>
  >();

  /**
   * Fires when a new MeshPacket message containing a Private packet has been
   * received from device
   *
   * @event onPrivatePacket
   */
  public readonly onPrivatePacket = new SubEvent<PacketMetadata<Uint8Array>>();

  /**
   * Fires when a new MeshPacket message containing a ATAK packet has been
   * received from device
   *
   * @event onAtakPacket
   */
  public readonly onAtakPacket = new SubEvent<PacketMetadata<Uint8Array>>();

  /**
   * Fires when a new MeshPacket message containing a Routing packet has been
   * received from device
   *
   * @event onRoutingPacket
   */
  public readonly onRoutingPacket = new SubEvent<
    PacketMetadata<Protobuf.Mesh.Routing>
  >();

  /**
   * Fires when a new MeshPacket message containing a Position packet has been
   * received from device
   *
   * @event onPositionPacket
   */
  public readonly onPositionPacket = new SubEvent<
    PacketMetadata<Protobuf.Mesh.Position>
  >();

  /**
   * Fires when a new MeshPacket message containing a Text packet has been
   * received from device
   *
   * @event onMessagePacket
   */
  public readonly onMessagePacket = new SubEvent<PacketMetadata<string>>();

  /**
   * Fires when a new MeshPacket message containing a Remote Hardware packet has
   * been received from device
   *
   * @event onRemoteHardwarePacket
   */
  public readonly onRemoteHardwarePacket = new SubEvent<
    PacketMetadata<Protobuf.RemoteHardware.HardwareMessage>
  >();

  /**
   * Fires when a new MeshPacket message containing a Waypoint packet has been
   * received from device
   *
   * @event onWaypointPacket
   */
  public readonly onWaypointPacket = new SubEvent<
    PacketMetadata<Protobuf.Mesh.Waypoint>
  >();

  /**
   * Fires when the devices connection or configuration status changes
   *
   * @event onDeviceStatus
   */
  public readonly onDeviceStatus = new SubEvent<Types.DeviceStatusEnum>();

  /**
   * Fires when a new FromRadio message containing a LogRecord packet has been
   * received from device
   *
   * @event onLogRecord
   */
  public readonly onLogRecord = new SubEvent<Protobuf.Mesh.LogRecord>();

  /**
   * Fires when the device receives a meshPacket, returns a timestamp
   *
   * @event onMeshHeartbeat
   */
  public readonly onMeshHeartbeat = new SubEvent<Date>();

  /**
   * Outputs any debug log data (currently serial connections only)
   *
   * @event onDeviceDebugLog
   */
  public readonly onDeviceDebugLog = new SubEvent<Uint8Array>();

  /**
   * Fires when the device receives a Metadata packet
   *
   * @event onDeviceMetadataPacket
   */
  public readonly onDeviceMetadataPacket = new SubEvent<
    PacketMetadata<Protobuf.Mesh.DeviceMetadata>
  >();

  /**
   * Outputs status of pending settings changes
   *
   * @event onpendingSettingsChange
   */
  public readonly onPendingSettingsChange = new SubEvent<boolean>();

  /**
   * Fires when a QueueStatus message is generated
   *
   * @event onQueueStatus
   */
  public readonly onQueueStatus = new SubEvent<Protobuf.Mesh.QueueStatus>();
}

# What is NAT and Bridged?

- NAT: Network Address Translation
  taking all connection that go to the router, add data to them and when it comes back it remembers where they have to connect to (knows where it have to go to)
  Like a postal service that knows where to send the packages to 
  Problem running a vm on a pc, NAT actually knows the PC but not how to send/receive to VM (this is where bridged comes in?)
- Bridged: 
  pretend that this VM is not inside the pc instead pretent that the vm is next to the host
  so bridged makes it visible in the network, as if it would be a seperate computer that gets an ip add
  bridged -> get a new ip add
  
  
      #network #vm #virtual-box
